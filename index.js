/**
 * 树形数据处理
 */

function setTreeData(arr) {
    if (!Array.isArray(arr)) {
        return []
    }

    let tree = []
    let map = {}
        // 将数据进行一一对应，键值对关系
    arr.forEach(item => {
        map[item.id] = item
    })
    arr.forEach(child => {
        const mapItem = map[child.pid]
        if (mapItem) {
            (mapItem.children || (mapItem.children = [])).push(child) //自动识别是否有children,没有就定义为数组[],添加到这个数据中
        } else {
            tree.push(child)
        }
    })

    return tree
}