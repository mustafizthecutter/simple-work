function paperRequirements(copy1, copy2, copy3) {
    const paperNeedsBook1 = 100;
    const paperNeedsBook2 = 200;
    const paperNeedsBook3 = 300;
    const pagesForBook1 = paperNeedsBook1 * copy1;
    const pagesForBook2 = paperNeedsBook2 * copy2;
    const pagesForBook3 = paperNeedsBook3 * copy3;
    const totalPages = pagesForBook1 + pagesForBook2 + pagesForBook3;
    return totalPages;
}
const totalPagesNeeds = paperRequirements(3, 5, 4);
console.log(totalPagesNeeds);