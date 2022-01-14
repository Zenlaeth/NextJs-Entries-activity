import { useReducer, useState, useCallback } from "react"
import Link from "next/link"
import { Formik } from "formik"
import * as yup from "yup"
import Navbar from "../components/Navbar"
import FormField from "../components/FormField"
import Button from "../components/Button"
import axios from "axios"

const initialValues = {
  amount: "",
  description: "",
}

const AddEntry = () => {
  const [entry, setEntry] = useState(initialValues)
  const { amount, description } = entry

  const onValueChange = (e) => {
    console.log(e.target.value)
    setEntry({ ...entry, [e.target.name]: e.target.value })
    console.log(entry)
  }

  const url = "http://localhost:3000"

  const addEntry = async (entry) => {
    return await axios.post(url, entry)
  }

  const addEntryDetails = async () => {
    await addEntry(entry)
  }

  const handleFormSubmit = useCallback(
    async (values, { setErrors, setFieldError }) => {
      // setFieldError("Description", "Description is too long")

      return true
    },
    []
  )
  const validationSchema = yup.object().shape({
    amount: yup.number().label("Amount"),
    description: yup.string().min(8).label("Description"),
  })

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, isValid, isSubmitting, errors }) =>
        console.log(errors) || (
          <div>
            <Navbar />
            <div className="b py-16 bg-gray-50 px-4 sm:px-6 h-screen w-screen flex justify-center items-center">
              <div className="form-group">
                <form
                  className="grid grid-cols-1 gap-y-6"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-dark">Add new entry</h2>
                  <FormField
                    type="text"
                    name="amount"
                    value={amount}
                    placeholder="Enter an amount"
                    onChange={(e) => onValueChange(e)}
                  >
                    Amount
                  </FormField>
                  <FormField
                    type="text"
                    name="description"
                    value={description}
                    placeholder="Enter a description"
                    onChange={(e) => onValueChange(e)}
                  >
                    Description
                  </FormField>
                  <Button
                    type="submit"
                    onClick={() => addEntryDetails()}
                    disabled={!isValid || isSubmitting}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    </Formik>
  )
}

export default AddEntry
