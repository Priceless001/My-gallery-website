import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/park9.jpg";
import image7 from "../images/park8.jpg";
import image8 from "../images/park5.png";
import image9 from "../images/img10.jpg";
import "../styles/Art.css";

const initialCharacters = [
  {
    id: "gary",
    name: "Incoming-Lagos",
    thumb: image1,
  },
  {
    id: "cato",
    name: "Oshodi",
    thumb: image2,
  },
  {
    id: "kvn",
    name: "Ikorodu",
    thumb: image3,
  },
  {
    id: "mooncake",
    name: "Oshodi",
    thumb: image7,
  },
  {
    id: "quinn",
    name: "Ikeja",
    thumb: image9,
  },
  {
    id: "quinn123",
    name: "Iyana-Ipaja",
    thumb: image8,
  },
];

function Art() {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState(initialCharacters);

  const filterImages = () => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredCharacters = filterImages();

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(filteredCharacters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCharacters(items); // Update the characters state after reordering
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery Of Some Parks in Lagos</h1>
        <input
          type="text"
          placeholder="Search by character name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul
                className="characters-grid"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredCharacters.map(({ id, name, thumb }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        className="character-card"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="characters-thumb">
                          <img src={thumb} alt={`${name} Thumb`} />
                        </div>
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default Art;
