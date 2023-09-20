import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import image1 from "../images/1.webp";
import image2 from "../images/2.webp";
import image3 from "../images/3.webp";


const Gallery = () => {
  const [images, setImages] = useState([
    { id: '1', src: image1 },
    { id: '2', src: image2 },
    { id: '3', src: image3 },
    // Add more images as needed
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedImages = [...images];
    const [reorderedItem] = updatedImages.splice(result.source.index, 1);
    updatedImages.splice(result.destination.index, 0, reorderedItem);

    setImages(updatedImages);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="image-gallery" direction="horizontal">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="image-list"
          >
            {images.map((image, index) => (
              <Draggable key={image.id} draggableId={image.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <img src={image.src} alt={`Image ${index + 1}`} />

                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Gallery;
