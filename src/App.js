import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="app-body">
        <header className="main-header">
          <Image />
          <Header />
        </header>
        <article className="article-main">
          <Preparation />
          <Content header="Ingredients" className="ingredients">
            <ul className="ingredients-list">
              <li className="ingredients-item">2-3 large eggs</li>
              <li className="ingredients-item">Salt, to taste</li>
              <li className="ingredients-item">Pepper, to taste</li>
              <li className="ingredients-item">
                1 tablespoon of butter or oil
              </li>
              <li className="ingredients-item">
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </Content>
          <Breaker className="end" />
          <Content header="Instructions" className="instructions">
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
          <Content header="Nutrition" className="nutrition">
            <p className="nutrition-info-label">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
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
        </article>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="header-img-container">
      <img
        src={process.env.PUBLIC_URL + "/images/image-omelette.jpeg"}
        alt="omlette"
        className="header-img"
      />
    </div>
  );
}

function Header() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className="header-div">
      <h1 className="main-header-title">Simple Omelette Recipe</h1>
      <p className="main-header-body">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
}

function Preparation() {
  return (
    <section className="preparation">
      <h2 className="preparation-title">Preparation time</h2>
      <ul className="preparation-details">
        <Point header="Total" point="Approximately 10 minutes" />
        <Point header="Preparation" point="5 minutes" />
        <Point header="Cooking" point="5 minutes" />
      </ul>
    </section>
  );
}

function Content({ header, children, className }) {
  return (
    <section className={className}>
      <h2 className={`${className}-title`}>{header}</h2>
      <div className={`${className}-content`}>{children}</div>
    </section>
  );
}

function Point({ header, point }) {
  return (
    <li className="point">
      <strong className="point-header">{header}</strong>
      <span className="point-content">: {point}</span>
    </li>
  );
}

function Breaker({ className }) {
  return <hr className={className} />;
}

function Nutrient({ nutrient, value }) {
  return (
    <>
      <span className="nutrient">{nutrient}</span>
      <strong className="value">{value}</strong>
    </>
  );
}
