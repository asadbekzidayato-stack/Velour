/* ===== VELOUR — Car Store (localStorage) ===== */

const STORE_KEY = 'velour_cars';

export function getCars() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
  } catch { return []; }
}

export function saveCar(car) {
  const cars = getCars();
  car.id = Date.now().toString();
  car.createdAt = new Date().toISOString();
  cars.push(car);
  localStorage.setItem(STORE_KEY, JSON.stringify(cars));
  return car;
}

export function deleteCar(id) {
  const cars = getCars().filter(c => c.id !== id);
  localStorage.setItem(STORE_KEY, JSON.stringify(cars));
}
