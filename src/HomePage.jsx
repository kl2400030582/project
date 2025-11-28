import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📊",
      title: "Nutrient Analysis",
      description: "Track your daily nutrient intake and compare it with recommended values for your age group."
    },
    {
      icon: "🎯",
      title: "Deficit Detection",
      description: "Automatically identify nutrient deficiencies and get alerts for critical gaps in your diet."
    },
    {
      icon: "💡",
      title: "Smart Recommendations",
      description: "Receive personalized food suggestions based on your specific nutrient needs."
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description: "Monitor your health score and track improvements over time with detailed analytics."
    },
    {
      icon: "🍽️",
      title: "Meal Planning",
      description: "Generate complete daily meal plans tailored to your nutritional requirements."
    },
    {
      icon: "👨‍⚕️",
      title: "Admin Dashboard",
      description: "Comprehensive admin tools to manage nutritional data and track user health metrics."
    }
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{
          fontSize: "48px",
          marginBottom: "16px",
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Diet Balance
        </h1>
        <p style={{ fontSize: "20px", color: "#6b7280", marginBottom: "32px" }}>
          Advanced Nutrition Analysis & Dietary Intervention System
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              background: "var(--primary)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              background: "white",
              color: "var(--primary)",
              border: "2px solid var(--primary)",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#1f2937" }}>
          Key Features
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px"
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: "32px",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.04)";
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{feature.icon}</div>
              <h3 style={{ marginTop: 0, marginBottom: "12px", color: "#1f2937" }}>{feature.title}</h3>
              <p style={{ color: "#6b7280", margin: 0, lineHeight: "1.6" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{
        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 163, 74, 0.1) 100%)",
        padding: "40px",
        textAlign: "center"
      }}>
        <h2 style={{ marginTop: 0, color: "#1f2937" }}>Perfect for Children & Adolescents</h2>
        <p style={{ fontSize: "18px", color: "#6b7280", marginBottom: "24px" }}>
          Designed specifically to help parents and healthcare providers monitor and improve
          nutritional health in children and adolescents aged 4-18 years.
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          marginTop: "32px"
        }}>
          <div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#22c55e" }}>4-8</div>
            <div style={{ color: "#6b7280" }}>Years</div>
          </div>
          <div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#22c55e" }}>9-13</div>
            <div style={{ color: "#6b7280" }}>Years</div>
          </div>
          <div>
            <div style={{ fontSize: "32px", fontWeight: "bold", color: "#22c55e" }}>14-18</div>
            <div style={{ color: "#6b7280" }}>Years</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

