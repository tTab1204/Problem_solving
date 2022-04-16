function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  let dummy = new ListNode(); // dummy data
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    // Declare
    let n1 = head; // 1
    let n2 = head.next; // pointer

    // Swap
    prev.next = n2; // Dummy data의 pointer를 n2로 만들어준다.
    n1.next = n2.next; // n1의 pointer를 n2의 pointer로 만들어준다.
    n2.next = n1; // n2가 가리키는 pointer는 n1(1)이 된다.

    // Assign
    prev = n1; // dummy data를 n1으로 만들어주고
    head = n1.next; // n1이 바라보는 pointer가 head가 된다.
  }

  return dummy.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  // 1 -> 2 -> 3 -> 4
  // 2 -> 1 -> 4 -> 3

  let previous = new Node(-1); // dummy data를 의미
  previous.next = current;

  while (current && current.next) {
    let n1 = head; // 1
    let n2 = head.next; // 2

    // 1. 1 -> 3 으로 만들어주기
    previous.next = n2;
    n1.next = n2.next;
    // 2. 2 -> 1로 만들어주기
    // 현재 상태: 2 -> 1 -> 3
    n2.next = n1;
    // 3. head update
    previous.next = n1;
    head = n1.next; // 즉 head는 2가 된다.
  }

  return previous.next;
};

// Recursive Solution
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  var v1 = head,
    v2 = head.next,
    v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
};
