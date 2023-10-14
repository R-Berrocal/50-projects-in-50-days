type ProgressProps = {
    styleClass: string,
    progress: number,
}

export const Progress = ({styleClass, progress}: ProgressProps) => {
  return (
    <div className={styleClass}>{progress}</div>
  )
}
