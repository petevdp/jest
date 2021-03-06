/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import chalk from 'chalk';

export default function getNoTestFoundPassWithNoTests() {
  return chalk.bold('No tests found, exiting with code 0');
}
