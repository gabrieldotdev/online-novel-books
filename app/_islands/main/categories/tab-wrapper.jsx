import { Tabs } from "@/islands/primitives/tabs";

export function TabWrapper({ defaultValue, children }) {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      {children}
    </Tabs>
  );
}
