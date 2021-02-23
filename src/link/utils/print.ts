import {ASTNode, print as gqlPrint, stripIgnoredCharacters} from 'graphql';

const print = (node: ASTNode): string => {
  return stripIgnoredCharacters(gqlPrint(node));
}

export default print;
