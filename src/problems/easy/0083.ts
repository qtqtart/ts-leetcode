import type { ListNode } from "@/lib/list-node";

const deleteDuplicates = (head: ListNode | null) => {
  if (!head) return null;

  let current = head;

  while (current.next !== null) {
    if (current.val !== current.next.val) current = current.next;
    else current.next = current.next.next;
  }

  return head;
};

export default deleteDuplicates;
