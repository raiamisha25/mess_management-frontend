const menuData = [
  {
    date: "Monday",
    breakfast: "Bread, Eggs, Butter, Milk, Tea/Coffee",
    lunch: "Rice, Dal, Chicken Curry, Vegetables, Salad",
    dinner: "Roti, Paneer Curry, Mixed Vegetables, Pickle",
  },
  {
    date: "Tuesday",
    breakfast: "Poha, Banana, Tea/Coffee",
    lunch: "Biryani, Raita, Salad",
    dinner: "Bread, Butter, Curd, Vegetables",
  },
  {
    date: "Wednesday",
    breakfast: "Upma, Chutney, Tea/Coffee",
    lunch: "Rice, Sambar, Vegetables, Pappad",
    dinner: "Roti, Egg Curry, Vegetables, Pickle",
  },
  {
    date: "Thursday",
    breakfast: "Aloo Parathas, Curd, Tea/Coffee",
    lunch: "Rice, Dal, Fish Curry, Vegetables, Salad",
    dinner: "Bread, Paneer Bhurji, Vegetables",
  },
  {
    date: "Friday",
    breakfast: "Poori, Aloo Subzi, Tea/Coffee",
    lunch: "Rice, Rajma Curry, Vegetables, Pickle",
    dinner: "Roti, Chicken Tikka, Vegetables, Curd",
  },
];

export default function ViewMenu() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-medium mb-2" style={{ color: "#FFFFFF" }}>
        Mess Menu
      </h1>
      <p className="text-sm mb-6" style={{ color: "#A0A0B2" }}>
        Weekly mess menu schedule
      </p>

      <div className="space-y-4">
        {menuData.map((menu, index) => (
          <div
            key={index}
            className="rounded border"
            style={{ backgroundColor: "#1A1A24", borderColor: "#2A2A38" }}
          >
            <div
              className="p-4 border-b"
              style={{
                backgroundColor: "#0F0F14",
                borderColor: "#2A2A38",
              }}
            >
              <h3 className="font-medium" style={{ color: "#FFFFFF" }}>
                {menu.date}
              </h3>
            </div>

            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "#7B61FF" }}>
                  BREAKFAST
                </p>
                <p className="text-sm" style={{ color: "#FFFFFF" }}>
                  {menu.breakfast}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "#7B61FF" }}>
                  LUNCH
                </p>
                <p className="text-sm" style={{ color: "#FFFFFF" }}>
                  {menu.lunch}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "#7B61FF" }}>
                  DINNER
                </p>
                <p className="text-sm" style={{ color: "#FFFFFF" }}>
                  {menu.dinner}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
