function HomePage() {
    const cards = ["CARD 1", "CARD 2", "CARD 3", "CARD 4", "CARD 5"];
  
    return (
      <div>
        <h1>Under Constructions</h1>
        <div style={{ display: "flex" }}>
          {cards.map((card, index) => (
            <div key={index} style={{ width: "250px", height: "250px", border: "1px solid grey" }}>
              {card}
              <p>BIG IMAGE</p>
              <p>Title</p>
              <p>Description</p>
              <p>Attributes</p>
            </div>
          ))}
          <ul>
            <li>Need data</li>
            <li>Need verified collections</li>
            <li>Need attributes</li>
            <li>Need rarity</li>
          </ul>
        </div>
        <div style={{paddingTop:"32px"}}>Searching, filtering, sweeping, buying and selling</div>
      </div>
    );
  }
  
  export default HomePage;
  