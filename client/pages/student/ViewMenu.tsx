import Layout from "@/components/Layout";

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
    <Layout role="student">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-medium mb-2" style={{ color: "#2e2e3a" }}>
          Mess Menu
        </h1>
        <p className="text-sm mb-6" style={{ color: "#6b6f85" }}>
          Weekly mess menu schedule
        </p>

        <div className="space-y-4">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className="rounded border"
              style={{ backgroundColor: "#ffffff", borderColor: "#e3e4ea" }}
            >
              <div
                className="p-4 border-b"
                style={{
                  backgroundColor: "#f5f7fb",
                  borderColor: "#e3e4ea",
                }}
              >
                <h3 className="font-medium" style={{ color: "#2e2e3a" }}>
                  {menu.date}
                </h3>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#5a4fcf" }}>
                    BREAKFAST
                  </p>
                  <p className="text-sm" style={{ color: "#2e2e3a" }}>
                    {menu.breakfast}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#5a4fcf" }}>
                    LUNCH
                  </p>
                  <p className="text-sm" style={{ color: "#2e2e3a" }}>
                    {menu.lunch}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium mb-1" style={{ color: "#5a4fcf" }}>
                    DINNER
                  </p>
                  <p className="text-sm" style={{ color: "#2e2e3a" }}>
                    {menu.dinner}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
