
// if true, the post should be removed
// if false, the post should be displayed
const filterPost = (sourceText, tag) => {
    var regex = RegExp('\\[.*' + tag + '.*\\]');
    return !regex.test(sourceText);
}

module.exports = { filterPost }
