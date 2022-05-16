import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../../hooks";
import { NftType } from "../../type/marketType";
import { buyNft } from "../../actions/marketAction";

const Item = () => {
  const router = useRouter();
  const { nftid } = router.query;
  const nft = useAppSelector((state) => {
    return state.market.nfts.find((nft) => {
      return nft.tokenId == nftid;
    });
  });

  const dispatch = useAppDispatch();
  const { provider, checkWrongNetwork } = useWeb3Context();

  const onClickBuyNft = async (nft: NftType | null) => {
    if (await checkWrongNetwork()) return;

    if (nft) dispatch(buyNft({ nft, provider, router }));
  };

  return (
    <div className="item section__padding">
      <div className="item-image">
        <img src={nft?.image} alt="item" />
      </div>
      <div className="item-content">
        <div className="item-content-title">
          <h1>{nft?.name}</h1>
          <p>Owner: {nft?.seller}</p>
        </div>
        <div className="item-content-detail">
          <p>{nft?.description}</p>
        </div>
        <div className="item-content-buy">
          <button
            onClick={() => onClickBuyNft(nft ? nft : null)}
            className="primary-btn"
          >
            Buy For {nft?.price} ETH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
