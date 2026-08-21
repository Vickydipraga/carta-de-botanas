const loginScreen = document.querySelector("#loginScreen");
const loginForm = document.querySelector("#loginForm");
const waiterApp = document.querySelector("#waiterApp");
const waiterPinInput = document.querySelector("#waiterPinInput");
const loginError = document.querySelector("#loginError");
const adminCodeInput = document.querySelector("#adminCodeInput");
const adminAccessButton = document.querySelector("#adminAccessButton");
const adminAccessStatus = document.querySelector("#adminAccessStatus");
const sessionWaiterName = document.querySelector("#sessionWaiterName");
const logoutButton = document.querySelector("#logoutButton");
const scannerCard = document.querySelector("#scannerCard");
const sectorTabs = document.querySelector("#sectorTabs");
const tableMap = document.querySelector("#tableMap");
const selectedTableLabel = document.querySelector("#selectedTableLabel");
const scannerTableLabel = document.querySelector("#scannerTableLabel");
const scannerVideo = document.querySelector("#scannerVideo");
const scanCanvas = document.querySelector("#scanCanvas");
const scannerStatus = document.querySelector("#scannerStatus");
const cameraFrame = document.querySelector("#cameraFrame");
const startScannerButton = document.querySelector("#startScannerButton");
const stopScannerButton = document.querySelector("#stopScannerButton");
const switchCameraButton = document.querySelector("#switchCameraButton");
const manualPayload = document.querySelector("#manualPayload");
const parseManualButton = document.querySelector("#parseManualButton");
const currentOrderCard = document.querySelector("#currentOrderCard");
const orderCodeLabel = document.querySelector("#orderCodeLabel");
const orderTypeLabel = document.querySelector("#orderTypeLabel");
const orderTotalLabel = document.querySelector("#orderTotalLabel");
const orderLines = document.querySelector("#orderLines");
const noteBox = document.querySelector("#noteBox");
const orderNoteLabel = document.querySelector("#orderNoteLabel");
const orderTableLabel = document.querySelector("#orderTableLabel");
const copyOrderButton = document.querySelector("#copyOrderButton");
const takeOrderButton = document.querySelector("#takeOrderButton");
const takenList = document.querySelector("#takenList");
const clearTakenButton = document.querySelector("#clearTakenButton");

const scannerState = {
  stream: null,
  facingMode: "environment",
  animationId: null,
  currentOrder: null,
  lastPayload: "",
  lastScanAt: 0,
  session: null,
  selectedSector: "Salon",
  selectedTable: null,
};

const sessionStorageKey = "delMonWaiterSession";
const rememberedPinKey = "delMonRememberedWaiterPin";
const adminAccessKey = "delMonAdminAccess";
// Cambia este valor para modificar el codigo de administrador.
const adminCode = "4321";

// Edita esta lista con los PIN reales de cada mozo.
const waiterPins = {
  1234: "Sofia",
  2222: "Martin",
  3333: "Valentina",
  4444: "Lucas",
};

// Edita estos sectores y mesas para adaptar el mapa visual del restaurante.
const floorPlan = [
  {
    id: "Salon",
    name: "Salón",
    tables: ["1", "2", "3", "4", "5", "6", "7", "8"],
  },
  {
    id: "Patio",
    name: "Patio",
    tables: ["P1", "P2", "P3", "P4", "P5", "P6"],
  },
  {
    id: "Terraza",
    name: "Terraza",
    tables: ["T1", "T2", "T3", "T4"],
  },
  {
    id: "Barra",
    name: "Barra",
    tables: ["B1", "B2", "B3", "B4"],
  },
];

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function setStatus(message, type = "") {
  scannerStatus.textContent = message;
  cameraFrame.classList.toggle("is-success", type === "success");
  cameraFrame.classList.toggle("is-error", type === "error");
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(sessionStorageKey) || "null");
  } catch {
    return null;
  }
}

function saveSession(session) {
  localStorage.setItem(sessionStorageKey, JSON.stringify(session));
}

function rememberPin(pin) {
  localStorage.setItem(rememberedPinKey, pin);
}

function fillRememberedPin() {
  const rememberedPin = localStorage.getItem(rememberedPinKey) || "";
  waiterPinInput.value = rememberedPin;
}

function applySession() {
  scannerState.session = readSession();
  const isLoggedIn = Boolean(scannerState.session?.name);
  loginScreen.hidden = isLoggedIn;
  waiterApp.hidden = !isLoggedIn;

  if (isLoggedIn) {
    sessionWaiterName.textContent = scannerState.session.name;
    renderFloorPlan();
    renderTakenOrders();
  } else {
    stopScanner();
    fillRememberedPin();
  }
  refreshIcons();
}

function login(event) {
  event.preventDefault();
  const pin = waiterPinInput.value.trim();
  const name = waiterPins[pin];

  if (!name) {
    waiterPinInput.value = "";
    loginError.textContent = "PIN incorrecto.";
    waiterPinInput.focus();
    return;
  }

  rememberPin(pin);
  saveSession({
    name,
    waiterCode: pin,
    deviceId: globalThis.crypto?.randomUUID?.() || `device-${Date.now()}`,
    startedAt: new Date().toISOString(),
  });
  loginError.textContent = "";
  waiterPinInput.value = "";
  applySession();
}

function logout() {
  stopScanner();
  localStorage.removeItem(sessionStorageKey);
  scannerState.currentOrder = null;
  scannerState.selectedTable = null;
  currentOrderCard.hidden = true;
  scannerCard.hidden = true;
  applySession();
}

function openAdminAccess() {
  const code = adminCodeInput.value.trim();
  if (code !== adminCode) {
    adminAccessStatus.textContent = "Código incorrecto.";
    adminAccessStatus.classList.add("is-error");
    adminCodeInput.focus();
    return;
  }

  sessionStorage.setItem(
    adminAccessKey,
    JSON.stringify({
      grantedAt: Date.now(),
      source: "mozo",
    }),
  );
  adminAccessStatus.textContent = "Acceso autorizado.";
  adminAccessStatus.classList.remove("is-error");
  window.location.href = "index.html#admin";
}

function parseOrderPayload(payload) {
  const text = String(payload || "").trim();
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    throw new Error("El QR esta vacio.");
  }

  const code = lines.find((line) => line.toLowerCase().startsWith("pedido:"))?.split(":").slice(1).join(":").trim();
  const type = lines.find((line) => line.toLowerCase().startsWith("tipo:"))?.split(":").slice(1).join(":").trim();
  const total = lines.find((line) => line.toLowerCase().startsWith("total:"))?.split(":").slice(1).join(":").trim();
  const note = lines.find((line) => line.toLowerCase().startsWith("aclaraciones:"))?.split(":").slice(1).join(":").trim();

  const itemLines = lines.filter((line) => /^\d+\s*x\s+/i.test(line));
  const items = itemLines.map((line) => {
    const match = line.match(/^(\d+)\s*x\s+(.+?)(?:\s+-\s+(.+))?$/i);
    return {
      quantity: match ? Number(match[1]) : 1,
      name: match ? match[2].trim() : line,
      price: match?.[3]?.trim() || "",
      raw: line,
    };
  });

  if (!code || !items.length) {
    throw new Error("No parece ser un QR de pedido de De Botanas.");
  }

  return {
    code,
    type: type || "En el local",
    total: total || "$ 0",
    note: note || "",
    items,
    raw: text,
    scannedAt: new Date().toISOString(),
  };
}

function getSelectedTableName() {
  return scannerState.selectedTable ? `Mesa ${scannerState.selectedTable}` : "";
}

function renderFloorPlan() {
  const takenOrders = getTakenOrders();
  const occupiedTables = new Set(takenOrders.map((order) => order.table));
  const activeSector = floorPlan.find((sector) => sector.id === scannerState.selectedSector) || floorPlan[0];

  sectorTabs.innerHTML = floorPlan
    .map(
      (sector) => `
        <button class="${sector.id === activeSector.id ? "is-active" : ""}" type="button" data-sector="${sector.id}">
          ${sector.name}
        </button>
      `,
    )
    .join("");

  tableMap.innerHTML = activeSector.tables
    .map((table) => {
      const isSelected = scannerState.selectedTable === table;
      const isOccupied = occupiedTables.has(table);
      return `
        <button
          class="table-button${isSelected ? " is-selected" : ""}${isOccupied ? " is-occupied" : ""}"
          type="button"
          data-table="${table}"
          aria-label="Mesa ${table}"
        >
          <span>${table}</span>
          <small>${isOccupied ? "Tomada" : "Libre"}</small>
        </button>
      `;
    })
    .join("");

  selectedTableLabel.textContent = scannerState.selectedTable ? getSelectedTableName() : "Sin mesa";
  scannerTableLabel.textContent = scannerState.selectedTable
    ? `${getSelectedTableName()} · ${activeSector.name}`
    : "Elegí una mesa";
  orderTableLabel.textContent = scannerState.selectedTable ? getSelectedTableName() : "Seleccioná una mesa";
  refreshIcons();
}

function selectSector(sectorId) {
  scannerState.selectedSector = sectorId;
  scannerState.selectedTable = null;
  scannerState.currentOrder = null;
  scannerCard.hidden = true;
  currentOrderCard.hidden = true;
  stopScanner();
  renderFloorPlan();
}

function selectTable(table) {
  scannerState.selectedTable = table;
  scannerCard.hidden = false;
  currentOrderCard.hidden = true;
  stopScanner();
  renderFloorPlan();
  scannerCard.scrollIntoView({ behavior: "smooth", block: "start" });
  setStatus(`Mesa ${table} seleccionada. Abrí el lector para escanear.`, "success");
}

function renderCurrentOrder(order) {
  scannerState.currentOrder = order;
  currentOrderCard.hidden = false;
  orderCodeLabel.textContent = order.code;
  orderTypeLabel.textContent = order.type;
  orderTotalLabel.textContent = order.total;
  orderTableLabel.textContent = getSelectedTableName();

  orderLines.innerHTML = order.items
    .map(
      (item) => `
        <article class="order-line">
          <span>${item.quantity}x</span>
          <div>
            <strong>${item.name}</strong>
            <small>${item.quantity === 1 ? "1 unidad" : `${item.quantity} unidades`}</small>
          </div>
          <b>${item.price}</b>
        </article>
      `,
    )
    .join("");

  noteBox.hidden = !order.note;
  orderNoteLabel.textContent = order.note;
  currentOrderCard.scrollIntoView({ behavior: "smooth", block: "start" });
  setStatus(`Pedido ${order.code} leído para ${getSelectedTableName()}.`, "success");
  refreshIcons();
}

function handlePayload(payload) {
  if (!scannerState.selectedTable) {
    setStatus("Primero elegí la mesa en el mapa.", "error");
    return;
  }
  try {
    const order = parseOrderPayload(payload);
    renderCurrentOrder(order);
    stopScanner();
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function startScanner() {
  if (!scannerState.session) {
    applySession();
    return;
  }
  if (!scannerState.selectedTable) {
    setStatus("Primero elegí la mesa en el mapa.", "error");
    return;
  }

  try {
    stopScanner();
    cameraFrame.hidden = false;
    setStatus("Pidiendo permiso de camara...");
    scannerState.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: scannerState.facingMode,
      },
      audio: false,
    });
    scannerVideo.srcObject = scannerState.stream;
    await scannerVideo.play();
    startScannerButton.disabled = true;
    stopScannerButton.disabled = false;
    switchCameraButton.disabled = false;
    setStatus("Apunta al QR del cliente.");
    scanLoop();
  } catch {
    cameraFrame.hidden = false;
    switchCameraButton.disabled = true;
    setStatus("No se pudo abrir la camara. Revisa permisos o usa carga manual.", "error");
  }
}

function stopScanner() {
  if (scannerState.animationId) {
    cancelAnimationFrame(scannerState.animationId);
    scannerState.animationId = null;
  }
  if (scannerState.stream) {
    scannerState.stream.getTracks().forEach((track) => track.stop());
    scannerState.stream = null;
  }
  scannerVideo.srcObject = null;
  startScannerButton.disabled = false;
  stopScannerButton.disabled = true;
  switchCameraButton.disabled = true;
  cameraFrame.hidden = true;
  setStatus("Apunta al QR del cliente.");
}

function scanLoop() {
  if (!scannerState.stream || scannerVideo.readyState < 2) {
    scannerState.animationId = requestAnimationFrame(scanLoop);
    return;
  }

  const canvas = scanCanvas;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  canvas.width = scannerVideo.videoWidth;
  canvas.height = scannerVideo.videoHeight;
  context.drawImage(scannerVideo, 0, 0, canvas.width, canvas.height);

  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const result = window.jsQR?.(imageData.data, imageData.width, imageData.height, {
    inversionAttempts: "dontInvert",
  });

  if (result?.data) {
    const now = Date.now();
    if (result.data !== scannerState.lastPayload || now - scannerState.lastScanAt > 1800) {
      scannerState.lastPayload = result.data;
      scannerState.lastScanAt = now;
      handlePayload(result.data);
      return;
    }
  }

  scannerState.animationId = requestAnimationFrame(scanLoop);
}

function orderToText(order, table) {
  const itemText = order.items.map((item) => item.raw).join("\n");
  const noteText = order.note ? `\nAclaraciones: ${order.note}` : "";
  const waiterText = scannerState.session?.name ? `\nMozo: ${scannerState.session.name}` : "";
  return `${order.code}\nMesa: ${table}${waiterText}\n${order.type}\n\n${itemText}\n\nTotal: ${order.total}${noteText}`;
}

function getTakenOrders() {
  try {
    return JSON.parse(localStorage.getItem("delMonTakenOrders") || "[]");
  } catch {
    return [];
  }
}

function saveTakenOrders(orders) {
  localStorage.setItem("delMonTakenOrders", JSON.stringify(orders));
}

function takeOrder() {
  if (!scannerState.currentOrder) return;
  const table = scannerState.selectedTable;
  if (!table) {
    setStatus("Elegí una mesa antes de tomar el pedido.", "error");
    return;
  }

  const takenOrder = {
    ...scannerState.currentOrder,
    table,
    waiterName: scannerState.session?.name || "Sin identificar",
    waiterDeviceId: scannerState.session?.deviceId || "",
    takenAt: new Date().toISOString(),
  };
  const existing = getTakenOrders().filter((order) => order.code !== takenOrder.code);
  saveTakenOrders([takenOrder, ...existing].slice(0, 40));
  renderTakenOrders();
  renderFloorPlan();
  currentOrderCard.hidden = true;
  scannerState.currentOrder = null;
  setStatus(`Pedido tomado para mesa ${table} por ${takenOrder.waiterName}.`, "success");
}

async function copyOrder() {
  if (!scannerState.currentOrder) return;
  const table = scannerState.selectedTable || "sin asignar";
  const text = orderToText(scannerState.currentOrder, table);
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Pedido copiado.", "success");
  } catch {
    manualPayload.value = text;
    setStatus("No se pudo copiar automatico. Quedo en carga manual.", "error");
  }
}

function formatTime(isoDate) {
  return new Intl.DateTimeFormat("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoDate));
}

function renderTakenOrders() {
  const orders = getTakenOrders();
  takenList.innerHTML = orders.length
    ? orders
        .map(
          (order) => `
            <article class="taken-item">
              <header>
                <strong>${order.code}</strong>
                <span>Mesa ${order.table}</span>
              </header>
              <p>${order.items.length} ${order.items.length === 1 ? "item" : "items"} · ${order.total} · ${formatTime(order.takenAt)} · ${order.waiterName || "Sin mozo"}</p>
            </article>
          `,
        )
        .join("")
    : `<div class="taken-empty">Todavia no hay pedidos tomados.</div>`;
  renderFloorPlan();
}

loginForm.addEventListener("submit", login);
adminAccessButton.addEventListener("click", openAdminAccess);
logoutButton.addEventListener("click", logout);
sectorTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sector]");
  if (!button) return;
  selectSector(button.dataset.sector);
});
tableMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-table]");
  if (!button) return;
  selectTable(button.dataset.table);
});
startScannerButton.addEventListener("click", startScanner);
stopScannerButton.addEventListener("click", () => {
  stopScanner();
});

switchCameraButton.addEventListener("click", () => {
  scannerState.facingMode = scannerState.facingMode === "environment" ? "user" : "environment";
  if (scannerState.stream) startScanner();
});

parseManualButton.addEventListener("click", () => handlePayload(manualPayload.value));
takeOrderButton.addEventListener("click", takeOrder);
copyOrderButton.addEventListener("click", copyOrder);
clearTakenButton.addEventListener("click", () => {
  saveTakenOrders([]);
  renderTakenOrders();
});

window.addEventListener("pagehide", stopScanner);

applySession();
refreshIcons();
