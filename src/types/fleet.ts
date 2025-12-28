export type Fleet = {
  id: string;
  regNo: string;
  category: "Auto" | "Car" | "Truck" | "Bus";
  driverName: string;
  available: boolean;
};
