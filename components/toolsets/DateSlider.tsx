import React, { useState } from "react"
import { Badge, Button } from "react-bootstrap"
import { getTextClass } from "../helpers"
import { DateSelectorProps } from "./props";

/**
 * DateSlider is a set of input for date.
 * It bundles range input and increment/decrement button to select a date.
 *
 * By default, the current date `new Date()` is specified for the initial value.
 */
const DateSlider = (props: DateSelectorProps) => {
    const assignDate = props.onChange
    const now = new Date()
    const [date, setDate] = useState(props.date ? props.date.getTime() : now.getTime())
    const dateResidue = now.getTime() % 86400
    const minDate = props.minDate ? props.minDate.getTime() : new Date(now.getFullYear() + "-01-01").getTime() + dateResidue
    const maxDate = props.maxDate ? props.maxDate.getTime() : new Date(now.getFullYear() + "-12-31").getTime() + dateResidue
    const dayMillSeconds = 86400000
    const defaultWidth = "10rem"

    return (
        <div
            className={"d-flex"}
        >
            <Button
                className={`rounded-circle ${getTextClass(props.text)}`}
                variant={props.variant}
                disabled={!(date > minDate)}
                onClick={() => {
                    if (date > minDate) {
                        setDate(date - dayMillSeconds)
                        if (typeof assignDate === "function") assignDate(date)
                    }
                }}
            >
                &lt;
            </Button>
            <Badge
                style={{
                    position: "absolute",
                    display: "block",
                    width: "5rem",
                    marginLeft: `calc(${props.width ? props.width : defaultWidth}*0.55 - (5rem / 2) + 2rem)`,
                    marginTop: `-0.5rem`,
                }}
                pill
                bg={props.variant}
            >
                <label>
                    {new Date(date).toLocaleDateString()}
                    <input
                        type="date"
                        value={new Date(date).toISOString()}
                        style={{
                            position: "relative",
                            height: 0,
                            width: 0,
                            padding: 0,
                            left: "-5rem",
                            visibility: "hidden"
                        }}
                        onChange={(e) => {
                            setDate(new Date(e.target.value).getTime())
                        }}
                    />
                </label>
            </Badge>

            <input
                type="range"
                id={`date-slider-${props.name}`}
                name={props.name}
                required={true}
                min={minDate}
                max={maxDate}
                value={date}
                step={dayMillSeconds}
                className={`input-range mx-2 ${props.className}`}
                style={{
                    position: "relative",
                    top: "0.3rem",
                    width: props.width ? props.width : defaultWidth ,
                }}
                onChange={(e) => {
                    setDate(parseInt(e.target.value))
                    if (typeof assignDate === "function") assignDate(e.target.value)
                }}
            />

            <Button
                className={`rounded-circle ${getTextClass(props.text)}`}
                variant={props.variant}
                disabled={!(date < maxDate - dateResidue)}
                onClick={() => {
                    if (date < maxDate) {
                        setDate(date + dayMillSeconds)
                        if (typeof assignDate === "function") assignDate(date)
                    }
                }}
            >
                &gt;
            </Button>
        </div>
    )
}

export default DateSlider
