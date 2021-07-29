import React from 'react';
import { CardBodyButtonBuy } from './card-body-button-buy.js';
import { CardBodySymbol } from './card-body-symbol.js';
import { CardBodyName } from './card-body-name.js';
import { CardBodyCategory } from './card-body-category.js';
import { CardBodyFundingDetail } from './card-body-funding-detail.js';
import { CardBodyProgressBar } from './card-body-progress-bar.js';
import { CardBodyLotPrice } from './card-body-lot-price.js';
import { CardBodyDividendDetail } from './card-body-dividend-detail.js';
import { CardBodySoldImage } from './card-body-sold-image.js';

export const CardBody = (props) => {
    return (
        <div className="card-body custom">
            <div className="container-fluid px-0">
                {props.isSold == true &&
                    <CardBodySoldImage relativePath={props.relativePath} />
                }

                {props.isSold == false &&
                    <CardBodyButtonBuy
                    link={props.link}
                />
                }
                <CardBodySymbol
                    symbol={props.token.symbol}
                />
                <CardBodyName
                    name={props.token.name}
                />
                <CardBodyCategory
                    category={props.category}
                />
                <CardBodyFundingDetail
                    fundingProgress={props.fundingProgress}
                    totalFunding={props.totalFunding}
                    remainingDays={props.remainingDays}
                />
                <CardBodyProgressBar
                    launchProgress={props.launchProgress * 100}
                />
                <CardBodyLotPrice
                    initialTokenPrice={props.initialTokenPrice}
                    tokenSupply={props.tokenSupply}
                />
                <CardBodyDividendDetail
                    dividendSchedule={props.dividendSchedule}
                    annualRentYield={props.annualRentYield}
                    annualRentYieldUpper={props.annualRentYieldUpper}
                    dividendPeriodDesc={props.dividendPeriodDesc}
                    dividendEstimatesDesc={props.dividendEstimatesDesc}
                />
            </div>
        </div>
    );
}