import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const FormDEs = () => {
  const [formFields, setFormFields] = useState([]);

  // Function to handle form field reordering after drag and drop
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedFields = Array.from(formFields);
    const [reorderedField] = updatedFields.splice(result.source.index, 1);
    updatedFields.splice(result.destination.index, 0, reorderedField);

    setFormFields(updatedFields);
  };

  // Function to save the form configuration
  const saveFormConfiguration = async () => {
    try {
      const response = await axios.post('/api/forms', { formConfig: formFields });
      console.log(response.data); // Display success message
    } catch (error) {
      console.error('Error saving form configuration:', error);
    }
  };

  return (
    <div>
      <h1>Form Designer</h1>

      {/* Drag and drop container */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="formFields">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {/* Form fields */}
              {formFields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* Render the form field based on field type */}
                      {/* ... */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Button to save the form configuration */}
      <button onClick={saveFormConfiguration}>Save Form Configuration</button>
    </div>
  );
};

export  default FormDEs;