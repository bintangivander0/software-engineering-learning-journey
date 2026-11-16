export function MoodBoardItem ({color, image, description}) {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img 
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard () {
  const boards = [
    {
      id: 1,
      color: "#8fbc8f",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Jalan setapak rindang yang menenangkan"
    },{
      id: 2,
      color: "#8cb8b7",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Pesisir pantai dengan ombak yang tenang"
    },{
      id: 3,
      color: "#3caf62ff",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Hamparan rumput hijau yang menyegarkan"
    },{
      id: 4,
      color: "#6d5353",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Kapal layar di tengah samudra yang luas"
    },{
      id: 5,
      color: "#72aae5",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Keindahan arsitektur pesisir Antorini"
    },{
      id: 6,
      color: "#dbcdbd",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Burung merpati yang bertengger santai"
    }
  ]
  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {
          boards.map((board) => (
            <MoodBoardItem 
              key={board.id}
              color={board.color}
              image={board.image}
              description={board.description}
            />
          ))
        }
      </div>
    </div>
  );
}