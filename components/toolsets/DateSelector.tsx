import React, { useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import { getBgClass, getLocalISOStringDate, getBorderClass, getTextClass } from '../helpers'
import { DateSelectorProps } from "./props";

/**
 * DateSelector is a set of input for date.
 * It bundles date input and increment/decrement button to select a date.
 *
 * By default, the current date `new Date()` is specified for the initial value.
 */
const DateSelector = (props: DateSelectorProps) => {
    const assignDate = props.onChange
    const inputClass = `form-control ${getBorderClass(props.border)} ${getBgClass(props.bg)} ${getTextClass(props.text)}`
    const btnClass = `input-group-text ${getBorderClass(props.border)} ${getBgClass(props.variant)} ${getTextClass(props.text)}`
    const [date, setDate] = useState(props.date ? props.date : new Date())
    const minDate = props.minDate ? getLocalISOStringDate(props.minDate) : date.getFullYear() + "-01-01",
        maxDate = props.maxDate ? getLocalISOStringDate(props.maxDate) : date.getFullYear() + "-12-31"

    return (
        <div className="selector d-flex justify-content-between">
            <InputGroup>
                <Button
                    className={btnClass}
                    variant={props.variant}
                    onClick={() => {
                        setDate(new Date(date.setHours(-24)))
                        if (typeof assignDate === "function") assignDate(date)
                    }}
                    disabled={minDate === getLocalISOStringDate(date)}
                >
                    &lt;
                </Button>
                <input
                    id={`date-selector-${props.name}`}
                    name={props.name}
                    type="date"
                    required={true}
                    min={minDate}
                    max={maxDate}
                    value={getLocalISOStringDate(date)}
                    className={inputClass}
                    onChange={(e) => {
                        if (e.target.value === "") console.log("unconditional date selection")
                        else setDate(new Date(e.target.value))
                        if (typeof assignDate === "function") assignDate(e.target.value)
                    }}
                />
                <Button
                    className={btnClass}
                    variant={props.variant}
                    onClick={() => {
                        setDate(new Date(date.setHours(24)))
                        if (typeof assignDate === "function") assignDate(date)
                    }}
                    disabled={maxDate === getLocalISOStringDate(date)}
                >
                    &gt;
                </Button>
            </InputGroup>


        </div>
    )
}

export default DateSelector
