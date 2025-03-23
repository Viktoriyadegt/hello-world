// Description:
// For this exercise you will be strengthening your page-fu mastery.
// You will complete the PaginationHelper class,
// which is a utility class helpful for querying paging information related to an array.
//
// The class is designed to take in an array of values and an integer indicating
// how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant.
//
// The following are some examples of how this class is used:
//
// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid
//
// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1
//======================================================================================================================

class PaginationHelper {
    itemsPerPage;
    collection;
    fullyPageCount;
    #itemCount;
    #pageCount;

    constructor(collection, itemsPerPage) {
        this.itemsPerPage = itemsPerPage
        this.collection = collection
        this.#itemCount = collection.length
    }

    itemCount() {
        return this.#itemCount
    }

    pageCount() {
        let count = this.#itemCount / this.itemsPerPage
        this.fullyPageCount =Math.trunc(count)
        this.#pageCount = Math.ceil(count)
        return this.#pageCount
    }

    pageItemCount(pageIndex) {
        if (this.#itemCount === 0 ||
            (this.#itemCount < this.itemsPerPage && pageIndex > this.fullyPageCount) ||
            pageIndex >= this.#pageCount
        ) {
            return -1
        }
        return pageIndex <= this.fullyPageCount - 1 && pageIndex >= 0
            ? this.itemsPerPage : pageIndex === this.fullyPageCount
                ? this.#itemCount - (this.fullyPageCount * this.itemsPerPage) : -1
    }

    pageIndex(itemIndex) {
        if (this.#itemCount === 0 ||
            (this.#itemCount < this.itemsPerPage && itemIndex >= this.#itemCount)) {
            return -1
        }
        return itemIndex < this.#itemCount && itemIndex >= 0
            ? Math.trunc(itemIndex / this.itemsPerPage) : -1
    }
}

// tests ===============================================================

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)

console.log(helper.pageCount(), 3);
console.log(helper.itemCount(), 24);

console.log(helper.pageItemCount(0), 10);
console.log(helper.pageItemCount(1), 10);
console.log(helper.pageItemCount(2), 4);
console.log(helper.pageItemCount(3), -1);
console.log(helper.pageIndex(40), -1);
console.log(helper.pageIndex(22), 2);
console.log(helper.pageIndex(3), 0);
console.log(helper.pageIndex(0), 0);
console.log(helper.pageIndex(-1), -1);
console.log(helper.pageIndex(-23), -1);
console.log(helper.pageIndex(-15), -1);

const empty = new PaginationHelper([], 10);

console.log(empty.pageCount(), 0);
console.log(empty.itemCount(), 0);
console.log(empty.pageIndex(0), -1);
console.log(empty.pageItemCount(0), -1);

const collection2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const helper2 = new PaginationHelper(collection2, 29)

console.log(helper2.pageIndex(30), -1)