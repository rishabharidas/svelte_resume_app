// GENERATED by @edgedb/generate v0.4.1

import { Cardinality } from "edgedb/dist/reflection/index.js";
export var cardutil;
(function (cardutil) {
    function multiplyCardinalities(c1, c2) {
        if (c1 === Cardinality.Empty)
            return Cardinality.Empty;
        if (c1 === Cardinality.One)
            return c2;
        if (c1 === Cardinality.AtMostOne) {
            if (c2 === Cardinality.One)
                return Cardinality.AtMostOne;
            if (c2 === Cardinality.AtLeastOne)
                return Cardinality.Many;
            return c2;
        }
        if (c1 === Cardinality.Many) {
            if (c2 === Cardinality.Empty)
                return Cardinality.Empty;
            return Cardinality.Many;
        }
        if (c1 === Cardinality.AtLeastOne) {
            if (c2 === Cardinality.AtMostOne)
                return Cardinality.Many;
            if (c2 === Cardinality.One)
                return Cardinality.AtLeastOne;
            return c2;
        }
        throw new Error(`Invalid Cardinality ${c1}`);
    }
    cardutil.multiplyCardinalities = multiplyCardinalities;
    function multiplyCardinalitiesVariadic(cards) {
        if (cards.length === 0)
            throw new Error("Empty tuple not allowed");
        if (cards.length === 1)
            return cards[0];
        return cards.reduce((product, card) => multiplyCardinalities(product, card), Cardinality.One);
    }
    cardutil.multiplyCardinalitiesVariadic = multiplyCardinalitiesVariadic;
    function mergeCardinalities(a, b) {
        if (a === Cardinality.Empty)
            return b;
        if (b === Cardinality.Empty)
            return a;
        if (a === Cardinality.AtLeastOne)
            return Cardinality.AtLeastOne;
        if (b === Cardinality.AtLeastOne)
            return Cardinality.AtLeastOne;
        if (a === Cardinality.One)
            return Cardinality.AtLeastOne;
        if (b === Cardinality.One)
            return Cardinality.AtLeastOne;
        return Cardinality.Many;
    }
    cardutil.mergeCardinalities = mergeCardinalities;
    function mergeCardinalitiesVariadic(cards) {
        if (cards.length === 0)
            throw new Error("Empty tuple not allowed");
        if (cards.length === 1)
            return cards[0];
        const [first, second, ...rest] = cards;
        if (cards.length === 2)
            return mergeCardinalities(first, second);
        return mergeCardinalitiesVariadic([
            mergeCardinalities(first, second),
            ...rest,
        ]);
    }
    cardutil.mergeCardinalitiesVariadic = mergeCardinalitiesVariadic;
    function orCardinalities(c1, c2) {
        if (c1 === c2 || c1 === Cardinality.Many)
            return c1;
        if (c1 === Cardinality.AtLeastOne) {
            if (c2 === Cardinality.One)
                return Cardinality.AtLeastOne;
            return Cardinality.Many;
        }
        if (c1 === Cardinality.AtMostOne) {
            if (c2 === Cardinality.Many || c2 === Cardinality.AtLeastOne) {
                return Cardinality.Many;
            }
            return c1;
        }
        if (c1 === Cardinality.Empty) {
            if (c2 === Cardinality.AtMostOne || c2 === Cardinality.One) {
                return Cardinality.AtMostOne;
            }
            return Cardinality.Many;
        }
        if (c2 === Cardinality.Empty)
            return Cardinality.AtMostOne;
        return c2;
    }
    cardutil.orCardinalities = orCardinalities;
    function overrideLowerBound(card, override) {
        if (override === "One") {
            if (card === Cardinality.Many || card === Cardinality.AtLeastOne) {
                return Cardinality.AtLeastOne;
            }
            else {
                return Cardinality.One;
            }
        }
        else {
            if (card === Cardinality.Many || card === Cardinality.AtLeastOne) {
                return Cardinality.Many;
            }
            else if (card === Cardinality.Empty) {
                return Cardinality.Empty;
            }
            else {
                return Cardinality.AtMostOne;
            }
        }
    }
    cardutil.overrideLowerBound = overrideLowerBound;
    function overrideUpperBound(card, override) {
        if (override === "One") {
            if (card === Cardinality.One || card === Cardinality.AtLeastOne) {
                return Cardinality.One;
            }
            else {
                return Cardinality.AtMostOne;
            }
        }
        else {
            if (card === Cardinality.One || card === Cardinality.AtLeastOne) {
                return Cardinality.AtLeastOne;
            }
            else {
                return Cardinality.Many;
            }
        }
    }
    cardutil.overrideUpperBound = overrideUpperBound;
})(cardutil || (cardutil = {}));
