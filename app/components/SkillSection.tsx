
interface ISkillSection {
    skills: string[],
    color: string
    border: string
}

const SkillSection = ({ skills, color, border }: ISkillSection) => {
    return (
        <div className='flex flex-wrap gap-4'>
            {skills.map((name, index) => (
                <h2 key={name + index} className={`border rounded-full px-4 p-1  ${color} ${border}`}>
                    {name}
                </h2>
            ))}
        </div>
    )
}

export default SkillSection