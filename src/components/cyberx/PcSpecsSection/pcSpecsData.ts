
export interface PcSpec {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  display: string;
  peripherals: string;
  price: string;
  image: string;
}

export interface PcSpecsData {
  [key: string]: PcSpec;
}

export const pcSpecsData: PcSpecsData = {
  standard: {
    cpu: "Intel Core i5-11600K",
    gpu: "NVIDIA GeForce RTX 3060",
    ram: "16GB DDR4 3200MHz",
    storage: "512GB NVMe SSD",
    display: "24\" 144Hz IPS",
    peripherals: "HyperX мышь/клавиатура, Razer гарнитура",
    price: "150 ₽/час",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000",
  },
  pro: {
    cpu: "Intel Core i7-12700K",
    gpu: "NVIDIA GeForce RTX 3080",
    ram: "32GB DDR4 3600MHz",
    storage: "1TB NVMe SSD",
    display: "27\" 240Hz IPS",
    peripherals: "Logitech G Pro мышь/клавиатура, Steelseries гарнитура",
    price: "250 ₽/час",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000",
  },
  elite: {
    cpu: "Intel Core i9-12900K",
    gpu: "NVIDIA GeForce RTX 4090",
    ram: "64GB DDR5 5600MHz",
    storage: "2TB NVMe SSD",
    display: "32\" 360Hz IPS",
    peripherals: "Razer Pro мышь/клавиатура, Sennheiser гарнитура",
    price: "350 ₽/час",
    image: "https://images.unsplash.com/photo-1592840062661-a5f161c37a9b?auto=format&fit=crop&q=80&w=1000",
  },
};

export const specItemsConfig = [
  { label: "Процессор", key: "cpu", icon: "Cpu" },
  { label: "Видеокарта", key: "gpu", icon: "Tv" },
  { label: "Оперативная память", key: "ram", icon: "Memory" },
  { label: "Хранилище", key: "storage", icon: "HardDrive" },
  { label: "Монитор", key: "display", icon: "Monitor" },
  { label: "Периферия", key: "peripherals", icon: "Keyboard" },
];
