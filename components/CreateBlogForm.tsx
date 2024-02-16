"use client"

import { useState } from "react"
import axios from "axios"

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    mainTitle: "",
    description: "",
    views: 0,
    createdDate: "",
    creatorImage: "",
    creatorName: "",
    coverImage: "",
    titles: [
      { title: "", images: [{ image: "" }], paragraphs: [{ paragraph: "" }] },
    ],
    allImages: [{ image: "" }],
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleTitleChange = (index: number, value: string) => {
    const updatedTitles = [...formData.titles]
    updatedTitles[index].title = value
    setFormData({ ...formData, titles: updatedTitles })
  }

  const handleImageChange = (
    titleIndex: number,
    imageIndex: number,
    value: string
  ) => {
    const updatedTitles = [...formData.titles]
    updatedTitles[titleIndex].images[imageIndex].image = value
    setFormData({ ...formData, titles: updatedTitles })
  }

  const handleParagraphChange = (
    titleIndex: number,
    paragraphIndex: number,
    value: string
  ) => {
    const updatedTitles = [...formData.titles]
    updatedTitles[titleIndex].paragraphs[paragraphIndex].paragraph = value
    setFormData({ ...formData, titles: updatedTitles })
  }

  const handleAllImagesChange = (index: number, value: string) => {
    const updatedAllImages = [...formData.allImages]
    updatedAllImages[index].image = value
    setFormData({ ...formData, allImages: updatedAllImages })
  }

  const handleAddTitle = () => {
    setFormData({
      ...formData,
      titles: [
        ...formData.titles,
        { title: "", images: [{ image: "" }], paragraphs: [{ paragraph: "" }] },
      ],
    })
  }

  const handleAddParagraph = (titleIndex: number) => {
    const updatedTitles = [...formData.titles]
    updatedTitles[titleIndex].paragraphs.push({ paragraph: "" })
    setFormData({ ...formData, titles: updatedTitles })
  }

  const handleAddImage = (titleIndex: number) => {
    const updatedTitles = [...formData.titles]
    updatedTitles[titleIndex].images.push({ image: "" })
    setFormData({ ...formData, titles: updatedTitles })
  }

  const handleAddAllImages = () => {
    setFormData({
      ...formData,
      allImages: [...formData.allImages, { image: "" }],
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const filteredFormData = {
      ...formData,
      titles: formData.titles.map((title) => ({
        ...title,
        images: title.images.filter((image) => image.image !== ""),
      })),
      allImages: formData.allImages.filter((image) => image.image !== ""),
      coverImage: formData.coverImage !== "" ? formData.coverImage : undefined,
      creatorImage:
        formData.creatorImage !== "" ? formData.creatorImage : undefined,
    }

    setLoading(true)
    try {
      const response = await axios.post(
        "https://www.yusufdev.com/api/createPost",
        filteredFormData
      )
      const data = await response.data
    } catch (error) {
      console.error("Error creating blog post:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <input
        type="text"
        value={formData.mainTitle}
        onChange={(e) => handleInputChange("mainTitle", e.target.value)}
        placeholder="Main Title"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <textarea
        value={formData.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
        placeholder="Description"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        value={formData.views}
        onChange={(e) => handleInputChange("views", parseInt(e.target.value))}
        placeholder="Views"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        value={formData.createdDate}
        onChange={(e) => handleInputChange("createdDate", e.target.value)}
        placeholder="Created Date"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        value={formData.creatorImage}
        onChange={(e) => handleInputChange("creatorImage", e.target.value)}
        placeholder="Creator Image URL"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        value={formData.creatorName}
        onChange={(e) => handleInputChange("creatorName", e.target.value)}
        placeholder="Creator Name"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        value={formData.coverImage}
        onChange={(e) => handleInputChange("coverImage", e.target.value)}
        placeholder="Cover Image URL"
        className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      {/* Titles, paragraphs, images, and all images */}
      {formData.titles.map((title, titleIndex) => (
        <div
          key={titleIndex}
          className="mt-4 border border-gray-300 p-4 rounded-md"
        >
          <input
            type="text"
            value={title.title}
            onChange={(e) => handleTitleChange(titleIndex, e.target.value)}
            placeholder="Title"
            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {title.images.map((image, imageIndex) => (
            <input
              key={imageIndex}
              type="text"
              value={image.image}
              onChange={(e) =>
                handleImageChange(titleIndex, imageIndex, e.target.value)
              }
              placeholder="Image URL"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddImage(titleIndex)}
            className="btns"
          >
            Add Image
          </button>
          {title.paragraphs.map((paragraph, paragraphIndex) => (
            <textarea
              key={paragraphIndex}
              value={paragraph.paragraph}
              onChange={(e) =>
                handleParagraphChange(
                  titleIndex,
                  paragraphIndex,
                  e.target.value
                )
              }
              placeholder="Paragraph"
              className="block w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          ))}
          <button
            type="button"
            onClick={() => handleAddParagraph(titleIndex)}
            className="btns"
          >
            Add Paragraph
          </button>
        </div>
      ))}

      <button type="button" onClick={() => handleAddTitle()} className="btns">
        Add Title
      </button>

      {formData.allImages.map((image, index) => (
        <input
          key={index}
          type="text"
          value={image.image}
          onChange={(e) => handleAllImagesChange(index, e.target.value)}
          placeholder="All Images URL"
          className="block w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      ))}
      <button
        type="button"
        onClick={() => handleAddAllImages()}
        className="btns"
      >
        Add All Images
      </button>
      <br />
      <button type="submit" className="btns">
        {loading ? "Creating..." : "Create Blog Post"}
      </button>
    </form>
  )
}

export default CreateBlogForm
