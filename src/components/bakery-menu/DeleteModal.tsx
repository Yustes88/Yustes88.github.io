import { TrashIcon } from "@heroicons/react/24/outline";
import { Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { Dispatch } from "react";
import { BakeryMenuTypes } from "../../types/types";
import { MenuAction } from "../reducer/Reducer";

type DeleteModalProps = {
  menu: BakeryMenuTypes,
  dispatch: Dispatch<MenuAction>,
}

function DeleteModal({menu, dispatch}: DeleteModalProps) {
  const openDeleteModal = () =>
    openConfirmModal({
      title: "Delete your poll",
      centered: true,
      children: (
        <Text size="sm">Are you sure you want to delete this poll?</Text>
      ),
      labels: { confirm: "Да, удалить", cancel: "Не удалять" },
      confirmProps: { color: "primary", variant: "outline" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        dispatch({ type: 'delete_menu', payload: menu.id });
        console.log('deleted')
      },
    });

  return (
    <button className="flex items-center gap-x-1 text-red-madder hover:text-red-rusty hover:scale-110 active:text-red-madder active:scale-105 transition-all" onClick={openDeleteModal}>
<TrashIcon className="w-6 h-6"/>
<span>Удалить меню &quot;{menu.title}&quot;</span>
</button>
  );
}

export default DeleteModal;
