import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Header />
        <Preparation />
        <Content header="Ingredients">
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </Content>
        <Breaker className="end" />
        <Content header="Instructions">
          <ol>
            <Point
              header="Beat the eggs"
              point="In a bowl, beat the eggs with a pinch of salt and
        pepper until they are well mixed. You can add a tablespoon of water
        or milk for a fluffier texture."
            />

            <Point
              header="Heat the pan"
              point="Place a non-stick frying pan over medium heat and add
        butter or oil."
            />

            <Point
              header="Cook the omelette"
              point="Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
            />

            <Point
              header="Add fillings (optional)"
              point="When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosenfillings over one half of the omelette."
            />

            <Point
              header="Fold and serve"
              point="As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
            />

            <Point
              header="Enjoy"
              point="Serve hot, with additional salt and pepper if needed."
            />
          </ol>
        </Content>
        <Breaker className="end" />
        <Content header="Nutrition">
          The table below shows nutritional values per serving without the
          additional fillings.
          <div className="nutrient-table">
            <Nutrient nutrient="Calories" value="277kcal" />
            <Breaker />
            <Nutrient nutrient="Carbs" value="0g" />
            <Breaker />
            <Nutrient nutrient="Protein" value="20g" />
            <Breaker />
            <Nutrient nutrient="Fat" value="22g" />
          </div>
        </Content>
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <img src={"./images/image-omelette.jpeg"} alt="omelette" />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </>
  );
}

function Preparation() {
  return (
    <div className="preparation">
      <h3 style={{ color: "hsl(332, 51%, 32%)" }}>Preparation time</h3>
      <ul className="preparation-details">
        <Point header="Total" point="Approximately 10 minutes" />
        <Point header="Preparation" point="5 minutes" />
        <Point header="Cooking" point="5 minutes" />
      </ul>
    </div>
  );
}

function Content({ header, children }) {
  return (
    <>
      <h2 style={{ color: "hsl(14, 45%, 36%)" }}>{header}</h2>
      {children}
    </>
  );
}

function Point({ header, point }) {
  return (
    <li className="point">
      <strong>{header}:</strong> {point}
    </li>
  );
}

function Breaker({ className }) {
  return <hr className={className} />;
}

function Nutrient({ nutrient, value }) {
  return (
    <div className="nutrient-row">
      <span className="nutrient">{nutrient}</span>
      <span className="value">{value}</span>
    </div>
  );
}
