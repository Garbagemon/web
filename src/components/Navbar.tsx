import Button from "./Button";
import MonsterPreview from "./MonsterPreview";


export default function Navbar({}) {
  return (
    <div className="flex flex-row gap-10">
      <MonsterPreview monster={{
        name: "Watermon",
        picture: "./watermon.png",
        level: 9,
        xp: 2000
      }}/>
      <Button children={undefined}/>
      <Button children={undefined}/>
    </div>
  )
}