/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export const getClustersList = (state) => state.clusters.asList;
export const getClustersByName = (state) => state.clusters.byName;
export const getClusterByName = (state, name) => getClustersByName(state)[name];

export const isDetailPanelOpen = (state) => state.detailPanel.isOpen;

export const isLoading = (state) => state.clusters.isLoading;
export const clusterLoadError = (state) => state.clusters.clusterLoadError;
