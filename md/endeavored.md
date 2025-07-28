---
marp: true
lang: en-US
title: "Humanity, Endeavored: CC BY:NC:ND Version"
theme: custom
size: a4
paginate: true
headingDivider: 3
---

# Humanity, Endeavored
<!-- _class: title art-left -->
<!-- _paginate: skip -->

<!--![bg left](bg.jpg)-->
![bg left](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=)
<!--![bg left](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdjkJCQ+A8AAdwBSPJsk2gAAAAASUVORK5CYII=)-->
<!-- ![bg left](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=) -->

Supplement for Humanity, Blessed: TTRPG

CC BY:NC:ND Version

{{ process.env["TAG"] }}

snotskie.

<style scoped>
  section.title h1 {
    font-size: 60pt;
  }

  section.title:before {
    background-image: linear-gradient(
      var(--color-rules),
      var(--color-rules-2)
    );
  }
</style>

---
<!-- _paginate: skip -->

![width:2in](https://upload.wikimedia.org/wikipedia/commons/7/70/CC_BY-NC-ND.svg)

This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. To view a copy of this license, visit <https://creativecommons.org/licenses/by-nc-nd/4.0/>

If you publish your own works that use this system, please clearly label them on the cover with the phrase ***Humanity, Blessed* ⊜ Community Content** and include a link to the most recent stable version, at <https://snotskie.com/ttrpg/>

&copy; 2025 snotskie

[snotskie.com](https://snotskie.com)

DOI: 10.5281/zenodo.14673714

Cover typography: Bebas Neue, by Ryoichi Tsunekawa

<button onclick="bwprint()">Friendly Print 🖨️</button>

### Contents
<!-- _paginate: skip -->
<!-- _class: toc -->

## Tips and Tricks
<!-- _class: center major guide -->

### Using d20s
<!-- _class: guide -->

*Humanity, Blessed* only uses dice of size $d2$ through $d10$. However, sometimes you may want to use a $d20$ instead. Perhaps you've collected a fun set of $d20$s, you're controlling many characters at once, or you don't want to reveal NPC Stat Dice sizes.

Whatever the case, you may use the $d20$ Conversion table below to approximate this game's dice. Note how $d20$ values are converted for the $d6$ and $d8$, which allow it to behave within about 5% of those dice.

<div>
  <h4>
    d20 Conversion
  </h4>
  <table>
    <tbody>
      <tr>
        <th scope="row">d20</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
      </tr>
      <tr>
        <th scope="row">d10</th>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td style="border-right: 1px solid">10</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <th scope="row">d8</th>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td style="border-right: 1px solid">8</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <th scope="row">d6</th>
        <td>5</td>
        <td style="border-right: 1px solid">6</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td style="border-right: 1px solid">6</td>
      </tr>
      <tr>
        <th scope="row">d4</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td style="border-right: 1px solid">4</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td style="border-right: 1px solid">4</td>
      </tr>
    </tbody>
  </table>

  <table>
    <tbody>
      <tr>
        <th scope="row">d20</th>
        <th>13</th>
        <th>14</th>
        <th>15</th>
        <th>16</th>
        <th>17</th>
        <th>18</th>
        <th>19</th>
        <th>20</th>
      </tr>
      <tr>
        <th scope="row">d10</th>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
      </tr>
      <tr>
        <th scope="row">d8</th>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td style="border-right: 1px solid">8</td>
        <td><strong>1*</strong></td>
        <td><strong>3*</strong></td>
        <td><strong>5*</strong></td>
        <td><strong>1*</strong></td>
      </tr>
      <tr>
        <th scope="row">d6</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td style="border-right: 1px solid">6</td>
        <td><strong>5*</strong></td>
        <td><strong>1*</strong></td>
      </tr>
      <tr>
        <th scope="row">d4</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td style="border-right: 1px solid">4</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
  <p style="text-align: center">
    * Or redo the roll.
  </p>
</div>

## Endeavors
<!-- _class: center major rules -->

### ⏩ Rush Endeavors
<!-- _class: rules -->

Some scenes call for something between a Monstrous Endeavor and a Racing Endeavor, where the player characters must charge in and stop the enemy before they complete their plans, such as catching a thief before they can escape with a powerful artifact or infiltrating a star base before it can fire a large laser.

<div>

These can be performed like a Monstrous Endeavor, with the following adjustments:

- **Goal:** Move all your opponents to position $0$ before they can complete their scheme or foil your plans.
- **Charge Leader:** Before the first round, elect a "charge leader" from among you and your allies. Only the charge leader and the opponents are considered for determining who takes special actions.
- **Foiling:** When a charge leader is "foiled," another ally becomes the charge leader instead. Once you are foiled, you cannot become the charge leader again. Your opponents do not automatically win if your entire side has been foiled, but your victory will be much more difficult.
- **Simpler Turn Order:** Turn order moves clockwise, with the charge leader acting first, and it is never reversed. If there is no charge leader, monstrosities act first.
- **As Usual:** Actions, ally special actions, and buttons&mdash;these are as usual for a Monstrous Endeavor. However, monstrosities use the following special actions instead.

</div>

<div>
  <h4>
    Rush Monstrosity Special Actions
  </h4>
  <table>
    <tbody>
      <tr>
      <tr>
        <th scope="row">Plot Victory</th>
        <td><code>Special Action</code> Spend all your temporary Blessings and foil the charge leader. Then for each Recovery button your side has activated, add a Scheme button at the first position at or above your current position without one already.</td>
      </tr>
      <tr>
        <th scope="row">Declare Victory</th>
        <td><code>Special Action</code> If there are 10 or more Scheme buttons in a row, spend all your temporary Blessings and remove all opponents from the Endeavor.</td>
      </tr>
    </tbody>
  </table>
</div>

### 💣 Stealth Endeavors
<!-- _class: rules -->

Some campaigns or sessions may involve prolonged tension where the player characters attempt to sneak past guards, escape a prison, perform a heist, or so on!

<div>

These are performed like any other Endeavor, with the following adjustments, action options, and buttons:

- **Efficiency and Progress:** The symbol <b>X</b> represents your "efficiency" for the round, such as efficiency at stealth, charisma, or so on. And your temporary blessings represent your accumulated "progress" towards your plan.
- **The Eye:** The opposing side is represented by the "Eye." When the Endeavor begins, the Eye is in "warry mode," on the lookout for you and your fellow "rogues." However, once the Eye has been alerted, it will enter the much more dangerous "wake mode." For the sake of rules, the Eye is a character, but it has only a single Watch Stat, has no track position, it cannot be Attacked directly, and its Watch Stat is never spent when chosen as its Action Die.
- **Setup:** You and your fellow rogues begin at position $1$. At the top of the first round, the lay of the land will be provided at table discretion for the guarded area, including any rooms, halls, obstacles to climb or hide behind, locking and security mechanisms, and so on. The Eye's defenses in those areas are represented by Alarm buttons, actions the rogues need to complete are represented by Objective buttons, exit points are represented by Escape buttons, and places safe from danger are represented by Sanctuary buttons. As the Endeavor progresses, additional areas may become available, each with their own track and lay of the land.
- **Goal:** Remove all Objective buttons without alerting the Eye.

</div>

<div>
  <h4>
    Rogue Actions
  </h4>
  <table>
    <tbody>
      <tr>
        <th scope="row" rowspan="2">Attack</th>
        <th scope="row">Violent</th>
        <td><i>Hurt only.</i> Use your Action Die to violently Attack the Eye's defenses. On a success, choose an Alarm button within <b>X</b> spaces of your position and remove it from the Endeavor. On a Maximum Success, also remove all Alarm buttons that were contiguous with it.</td>
      </tr>
      <tr>
        <th scope="row">Non-violent</th>
        <td><i>Not Hurt.</i> Use your Action Die to non-violently Attack the Eye's defenses. On a success, steal <b>X</b> temporary Blessings of your choice from it. It then gains a number of new temporary Blessings equal to the amount it lost.</td>
      </tr>
      <tr>
        <th scope="row" colspan="2">Move</th>
        <td><i>Not Hurt.</i> Use your Action Die to perform a Check to move yourself toward your objective or away from danger. On a success, move up or down by <b>X</b>.</td>
      </tr>
      <tr>
        <th scope="row" colspan="2">Cover</th>
        <td><i>Any Stat.</i> Delay your action so you can Help another character who has not acted this round or so they can Help you. This Help may be used to increase or decrease <b>X</b> values instead of increasing rolls as usual.</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <h4>
    Rogue Special Actions
  </h4>
  <table>
    <tbody>
      <tr>
      <tr>
        <th scope="row">Quicken Pace</th>
        <td><code>Special Action</code> Spend all your temporary Blessings. You and up to <b>X</b> allies may each take an additional action during the next round.</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <h4>
    Eye Actions
  </h4>
  <table>
    <tbody>
      <tr>
        <th scope="row">Search</th>
        <td><i>Warry mode.</i> Add an Alarm button at a position without another button or character already.</td>
      </tr>
      <tr>
        <th scope="row">Scan</th>
        <td><i>Warry mode.</i> Choose up or down. Move all Alarm buttons in that direction by <b>X</b>.</td>
      </tr>
      <tr>
        <th scope="row">Awaken</th>
        <td><i>Wake mode.</i> Replace each Alarm button with Wound buttons (see Monstrous Endeavors) at the same positions, distributed as you wish between your opponents.</td>
      </tr>
      <tr>
        <th scope="row">Wound</th>
        <td><i>Wake mode.</i> Wound an opponent and gain <b>X</b> temporary Blessings.</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <h4>
    Eye Special Actions
  </h4>
  <table>
    <tbody>
      <tr>
      <tr>
        <th scope="row">Sweep Defenses</th>
        <td><code>Special Action</code> <i>Warry mode.</i> Choose two Alarm buttons that have no Alarm buttons between them. Add temporary Alarm buttons to all positions between them, removed at the end of next round.</td>
      </tr>
      <tr>
        <th scope="row">Engage Sentry</th>
        <td><code>Special Action</code> <i>Wake mode.</i> Remove all opponents with three Wound buttons in a row from the Endeavor. Then wound each remaining opponent.</td>
      </tr>
    </tbody>
  </table>
</div>

<div>
  <h4>
    Stealth Buttons
  </h4>
  <table>
    <tbody>
      <tr>
        <th scope="row">Alarm</th><td><i>Type:</i> Global. <i>Activation:</i> Activated when you end your turn on it. <i>Effect:</i> The Eye enters wake mode. <i>Passive:</i> When a rogue fails a Check or Sparks a roll, add another Alarm button above this one if there is not one there already. <i>Cumulative:</i> Any Alarm buttons that would move to or be placed at a position outside 1&ndash;20 instead move up or down by 20 until they are in that range. If multiple Alarms would move to or be placed at the same position, all but one at that position are removed.</td>
      </tr>
      <tr>
        <th scope="row">Objective</th><td><i>Type:</i> Global. <i>Activation:</i> Activated when you end your turn on or next to it. <i>Effect:</i> As an action on your next turn, you may use your Action Die to perform this button's Check. On a success, remove this button.</td>
      </tr>
      <tr>
        <th scope="row">Escape</th><td><i>Type:</i> Global. <i>Activation:</i> Activated when you move over it. <i>Effect:</i> You may safely remove yourself from the Endeavor.</td>
      </tr>
      <tr>
        <th scope="row">Sanctuary</th><td><i>Type:</i> Global. <i>Activation:</i> Activated when you perform an Attack while on or next to it. <i>Effect:</i> Remove this button. <i>Passive:</i> You do not activate Alarm buttons while on or next to this button.</td>
      </tr>
    </tbody>
  </table>
</div>

### Specialization Options
<!-- _class: ability -->

| Hidden Specialization |
| --- |
| *Effect:* Once per Stealth Endeavor as an action, you may use your Action Die to perform a Check to find or create a safe place. On a success, add a temporary Sanctuary button at your location, removed <b>X</b> rounds from now at the end of the round. |

## Index
<!-- _class: major center -->
<!-- _paginate: skip -->

### Options
<!-- _paginate: skip -->
<!-- _class: index abix -->

### Tables
<!-- _paginate: skip -->
<!-- _class: index tablist -->

{{ `<script src="/MarpShims/MarpShims.js?v=${process.env["TAG"]}"></script>` }}

{{ `<script src="script.js?v=${process.env["TAG"]}"></script>` }}

{{ `<style>@import url("style.css?v=${process.env["TAG"]}");</style>` }}
