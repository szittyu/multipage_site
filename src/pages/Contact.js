import { useLocation } from "react-router-dom"

export default function Contact() {
    const queryString = useLocation().search

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")

  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam distinctio perspiciatis doloribus molestias vitae magni nihil, animi quas esse corrupti qui ea, adipisci odit similique non cum incidunt amet fugit.</p>
    </div>
  )
}
