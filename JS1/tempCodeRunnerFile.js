function domainName(url) {
    if (url.includes('www.')) {
        let part1 = url.slice(0, url.indexOf('www.') + 4);

        let url2 = url.replace(part1, '');
        let part2 = url2.slice(url2.indexOf('.'));

        return url2.replace(part2, '')

    } else {
        let part1 = url.slice(0, url.indexOf('//') + 2)

        let url2 = url.replace(part1, '');
        let part2 = url2.slice(url2.indexOf('.'));

        return url2.replace(part2, '');
    }
}