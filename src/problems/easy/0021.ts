import { ListNode } from "@lib/list-node";

const mergeTwoLists = (
  listNode1: ListNode | null,
  listNode2: ListNode | null,
) => {
  if (listNode1 == null || listNode2 == null) return listNode1 || listNode2;

  if (listNode2.val > listNode1.val) {
    listNode1.next = mergeTwoLists(listNode1.next, listNode2);

    return listNode1;
  } else {
    listNode2.next = mergeTwoLists(listNode1, listNode2.next);

    return listNode2;
  }
};

export default mergeTwoLists;
