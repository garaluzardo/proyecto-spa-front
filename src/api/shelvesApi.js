/*Pendiente acabar, si me da tiempo: */

const API_URL_SHELVES = "http://localhost:5005/shelves-data";

export const getShelves = async () => {
  try {
    const response = await fetch(API_URL_SHELVES);
    if (!response.ok) {
      throw new Error("Error al obtener las estanterías");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const createShelve = async (shelveData) => {
  try {
    const response = await fetch(API_URL_SHELVES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shelveData),
    });

    if (!response.ok) {
      throw new Error("Error al crear la estantería");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const updateShelve = async (shelveId, updatedData) => {
  try {
    const response = await fetch(`${API_URL_SHELVES}/${shelveId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar la estantería");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteShelve = async (shelveId) => {
  try {
    const response = await fetch(`${API_URL_SHELVES}/${shelveId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la estantería");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};