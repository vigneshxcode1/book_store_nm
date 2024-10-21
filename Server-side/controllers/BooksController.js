import bookmodel from "../Models/BooksModels.js";
import apiFeature from '../Api/apiFeature.js'

export const createbooks = async (req, res) => {
  try {
    const {
      booktitle,
      bookdes,
      bookpricesell,
      bookpricesrent,
      booksauthor,
      bookstock,
      buyingoption,
      bookcategory,
    } = req.body;

    const books = await bookmodel.create({
      booktitle,
      bookdes,
      bookpricesell,
      bookpricesrent,
      booksauthor,
      bookstock,
      buyingoption,
      bookcategory,
    });

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Failed to create books",
      });
    }

    res.status(200).json({
      success: true,
      message: "Books created successfully",
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getsinglebook = async (req, res) => {
  try {
    const books = await bookmodel.findById(req.params.id);

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const getbooks = async (req, res) => {
  try {
    const apifeature  = new apiFeature(bookmodel.find(),req.query).search().filter();
    const books = await apifeature.query

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "No books found",
      });
    }

    res.status(200).json({
      success: true,
      count: books.length,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
      data:books
    });
  }
};

export const updatebook = async (req, res) => {
  try {
    const books = await bookmodel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true, 
    });

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Book update failed, book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: books,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deletebooks = async (req, res) => {
  try {
    const books = await bookmodel.findByIdAndDelete(req.params.id);

    if (!books) {
      return res.status(404).json({
        success: false,
        message: "Book deletion failed, book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
