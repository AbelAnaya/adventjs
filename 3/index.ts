type Inventory = Array<{ name: string; quantity: number; category: string }>;

interface Summary {
  [category: string]: {
    [name: string]: number;
  };
}

function organizeInventory(inventory: Inventory): object {
  let summary: Summary = {};

  inventory.forEach((item) => {
    if (item.category in summary && item.name in summary[item.category]) {
      summary[item.category][item.name] += item.quantity;
    } else if (item.category in summary) {
      summary[item.category][item.name] = item.quantity;
    } else {
      summary[item.category] = {};
      summary[item.category][item.name] = item.quantity;
    }
  });

  return summary;
}

const inventary = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

console.log(organizeInventory(inventary));
