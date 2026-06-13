import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  function LanguageChart({ repos }) {
    const languageCount = {};
  
    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] =
          (languageCount[repo.language] || 0) + 1;
      }
    });
  
    const data = Object.entries(languageCount).map(
      ([name, value]) => ({
        name,
        value,
      })
    );
  
    const COLORS = [
      "#0088FE",
      "#00C49F",
      "#FFBB28",
      "#FF8042",
      "#8884D8",
      "#82CA9D",
      "#FF6B6B",
    ];
  
    return (
      <div className="profile-card">
        <h2>📊 Language Distribution</h2>
  
        <div
          style={{
            width: "100%",
            height: "350px",
          }}
        >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index %
                        COLORS.length]
                    }
                  />
                ))}
              </Pie>
  
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default LanguageChart;