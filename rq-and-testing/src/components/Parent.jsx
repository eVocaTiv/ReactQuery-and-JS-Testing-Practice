import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchPokemons = async () => {
  const { data } = await axios.get("http://pokeapi.co/api/v2/pokemon?limit=5&offset=200");
  return data;
};

function Parent() {
  // get queryClient from context
  const queryClient = useQueryClient();

  const { data, status } = useQuery("pokemons", fetchPokemons);

  // upon edit in UI
  // mutateCreate(newValue)

  const mutation = useMutation((text) => axios.post("/api/data", { text }), {
    onSuccess: (data) => {
      // do something after api edit is successful - like displaying a toast
      // and updating client data
      // queryClient.setQueryData(['todo', { id: 5 }], data),
    },
  });

  const PokemonData = (pokemons) => {
    return pokemons.results.map((pokemon) => {
      return <div> Pokemon name is {pokemon.name} </div>;
    });
  };

  return (
    <div>
      {/* if mutation.error, then do something... */}
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error fetching pokemons</div>}
      {status === "success" && <div>{PokemonData(data)}</div>}
    </div>
  );
}

export default Parent;
