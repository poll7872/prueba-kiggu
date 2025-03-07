import {
  ArchiveFilled,
  DeleteFilled,
  NoteEditFilled,
  NoteFilled,
  StatusFilled,
} from "@fluentui/react-icons";

export function CardTask({ task }) {
  return (
    <>
      <article className="bg-white w-80 rounded-lg p-1 hover:border border-purple-800 hover:shadow-2xl hover:shadow-purple-900/50">
        <div className="flex items-center">
          <NoteFilled className="text-7xl cursor-pointer text-purple-600" />
          <div className="font-bold">
            <h2 className="text-base">{task.title}</h2>
            <p className="text-xs">Ultima modificación: 2020-19-04</p>
          </div>
        </div>
        <div className="flex justify-between ml-2">
          <span className="font-bold text-xs">
            <StatusFilled className="text-red-500 text-2xl cursor-pointer" />
            {task.state}
          </span>
          <div className="flex gap-2">
            <NoteEditFilled className="text-blue-500 text-2xl cursor-pointer" />
            <DeleteFilled className="text-red-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </article>
    </>
  );
}
