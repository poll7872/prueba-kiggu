import {
  ArchiveFilled,
  DeleteFilled,
  NoteEditFilled,
  NoteFilled,
} from "@fluentui/react-icons";

export function CardTask() {
  return (
    <>
      <article className="bg-white w-80 rounded-lg p-1 hover:border border-purple-800 hover:shadow-2xl hover:shadow-purple-900/50">
        <div className="flex items-center">
          <NoteFilled className="text-5xl text-7xl cursor-pointer text-purple-600" />
          <div className="font-bold">
            <h2 className="text-base">Tareas U</h2>
            <p className="text-xs">Ultima modificación: 2020-19-04</p>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <ArchiveFilled className="text-green-500 text-2xl cursor-pointer" />
          <NoteEditFilled className="text-blue-500 text-2xl cursor-pointer" />
          <DeleteFilled className="text-red-500 text-2xl cursor-pointer" />
        </div>
      </article>
    </>
  );
}
