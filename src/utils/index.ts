/**
 * Change ' ' and '&' to ASCII encode.
 * @param str Query to encode.
 * @returns Encoded query.
 */
export const encodeQuery = (
    str: string
) => str.split('&').join('%26').split(' ').join('+');
