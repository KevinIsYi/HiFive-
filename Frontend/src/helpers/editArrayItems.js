export const editArrayItems = (width, featured) => {
    let cut = 1;
    if (width >= 900) {
        cut = 4;
    }
    else if (width >= 768) {
        cut = 3;
    }
    else if (width >= 480) {
        cut = 2
    }
    
    return featured.slice(0, cut);
}
