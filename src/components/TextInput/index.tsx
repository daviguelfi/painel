import React, { useState, useEffect } from 'react'
import { Input as DasaInput, InputProps } from '@dasa-health/alma-react'

interface IInput extends InputProps {
  name: string
}

export function TextInput<IInput>({ name, ...props }) {
  const [value, setValue] = useState(props.value)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return <DasaInput defaultValue={value} name={name} variant={'default'} {...props} />
}
