

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const user = await kv.hgetall('user:me');
  return NextResponse.json(user);
}








/*
const API_KEY = "RGAPI-3b92d49e-4f44-4db7-95b1-50749c78eb99";

async function getPlayerPUUID(playerName, playerTag) {
    try {
        const response = await fetch("https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/" + playerName + "/" + playerTag + "?api_key=" + API_KEY);
        const data = await response.json();
        
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}


async function getUserData(puuid) {

    try {
        const response = await fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/" + puuid + "?api_key=" + API_KEY);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getMatches(puuid, count) {

    try {
        const response = await fetch("https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=" + count + "&api_key=" + API_KEY);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function GET() {
    return new Response('yo fam');
}

*/