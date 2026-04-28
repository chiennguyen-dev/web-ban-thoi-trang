export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "SIZE",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "CHỌN MỨC GIÁ",
    options: [
      { value: "0-200000", label: "Dưới 200.000đ" },
      { value: "200000-400000", label: "Từ 200.000đ - 400.000đ" },
      { value: "400000-600000", label: "Từ 400.000đ - 600.000đ" },
      { value: "600000-800.000", label: "Từ 600.000đ - 800.000đ" },
      { value: "800000-1000000", label: "Từ 800.000đ - 1 triệu" },
    ],
  },
  {
    id: "discount",
    name: "GIẢM GIÁ",
    options: [
      {
        value: "10",
        label: "10% Trở Lên",
      },
      { value: "20", label: "20% Trở Lên" },
      { value: "30", label: "30% Trở Lên" },
      { value: "40", label: "40% Trở Lên" },
      { value: "50", label: "50% Trở Lên" },
      { value: "60", label: "60% Trở Lên" },
      { value: "70", label: "70% Trở Lên" },
      { value: "80", label: "80% Trở Lên" },
    ],
  },

  {
    id: "stock",
    name: "TRẠNG THÁI TỒN KHO",
    options: [
      { value: "in_stock", label: "Còn Hàng" },
      { value: "out_of_stock", label: "Hết Hàng" },
    ],
  },
];

