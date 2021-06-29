import React, { FC, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { CharacterCard } from "../../components/CharacterCard";
import {
  useGetCharactersLazyQuery,
  useGetCharactersQuery,
} from "../../generated/graphql";
import { HomeMatchParams } from "../../interfaces";
import IPage from "../../interfaces/page";

export const Home: FC<IPage & RouteComponentProps<HomeMatchParams>> = () => {
  const [getCharacters, { data, loading, error }] = useGetCharactersLazyQuery({
    variables: {
      page: 1,
      name: "rick",
    },
  });

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  if (!loading && !data) {
    return (
      <div>
        <div>You got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full p-12 bg-black opacity-80 inset-0 z-0">
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {!data && loading ? (
            <div>loading...</div>
          ) : (
            <>
              {data?.characters?.results?.map((character) =>
                !character ? null : (
                  <CharacterCard
                    key={character.id}
                    image={character?.image ?? undefined}
                    name={character?.name ?? undefined}
                    dimension={character.location?.dimension ?? undefined}
                    status={character?.status ?? undefined}
                    episode={character?.episode[0]?.name ?? undefined}
                  />
                )
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
